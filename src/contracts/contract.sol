pragma solidity ^0.5.11;

//Founder: 0x9113A1d7A8d600f69024550C276106bDCD52259A
//Issuer: 0x14a812669cC393290416Ab9613737B7958FF134c
//Student: 0x4dF231C38b4Bb27c3060F5817Cd831286C94A49C
//Company: 0x3A7f0D0b04FFc154f7650EA1b31368491D548a94, 0xe22097Af9D4b9cDB76DBfb5A498b6aC86da8437A, 0x7Eb7dF2E26C91824c04476b640E341820D01fE13, 0xbFFBDBc205C928D77F9e26f6F70F3329F92e682E

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721Full.sol";



contract Factory is ERC721Full {
    struct Issuer {
        bool registered;
        Certificate[] certificates;
    }
    
    struct Company {
        bool registered;
        mapping(address => bool) employees;
    }
    
    struct Experience {
        uint startTime;
        uint lastExperience;
        address[] preCompanies;
    }

    struct Package {
        uint expiredTime;
        uint accessTimesLimit;
    }
    
    address public founder;
    mapping(address => Issuer) public issuers;
    mapping(address => Company) public companies;
    mapping(uint256 => Certificate) private certAddresses;
    mapping(address => Experience) experienceList;
    mapping(address => string[]) public positions;
    enum WorkingStatus {free, working}
    mapping (address => WorkingStatus) public employeeWorkingStatus;
    mapping(uint => mapping(address => bool)) private _tokenApprovals;
    mapping(address => bool) public isPublished;
    
    //Store
    address[] private publicUsers;
    mapping(address => Package) public CVPackage;
    mapping(address => bool) private invitedUsers;
    
    constructor() public ERC721Full("Certificate", "CRT") {
        founder = msg.sender;
    }
    
    //modifier function
    modifier onlyFounder() {
        require(msg.sender == founder, "Only founder can call this function");
        _;
    }
    
    modifier onlyRegisteredIssuer() {
        require(issuers[msg.sender].registered, "Only registered issuer can call this function");
        _;
    }
    
    modifier onlyRegisteredCompany() {
        require(companies[msg.sender].registered, "Only registered company can call this function");
        _;
    }
    
    //Fix available code
    function transferFrom(address from, address to, uint256 tokenId) public {}
    function safeTransferFrom(address from, address to, uint256 tokenId) public {}
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public {}
    function getApproved(uint256 tokenId) public view returns (address) {}
        
   function approve(address to, uint256 tokenId) public {
        address owner = ownerOf(tokenId);
        require(to != owner, "ERC721: approval to current owner");

        require(_msgSender() == owner || isApprovedForAll(owner, _msgSender()),
            "ERC721: approve caller is not owner nor approved for all"
        );

        _tokenApprovals[tokenId][to] = true;
        emit Approval(owner, to, tokenId);
    }
    
    function getApproved(uint256 tokenId, address to) public view returns (bool) {
        require(_exists(tokenId), "ERC721: approved query for nonexistent token");

        return _tokenApprovals[tokenId][to];
    }

    
    function getCertificateAddress(uint256 tokenId) public view returns (Certificate) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        require(
            ownerOf(tokenId) == msg.sender || getApproved(tokenId, msg.sender) || isPublished[ownerOf(tokenId)], 
            "You are not allowed to call this function without the owner's permission"
        );
        
        return certAddresses[tokenId];
    }
    
    function setCertAddress(uint256 tokenId, Certificate certAdress) internal {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        certAddresses[tokenId] = certAdress;
    }
    
    
    //Collect issuer and create certificate
    function registerIssuer(address issuerAddress) public onlyFounder {
        require(!issuers[issuerAddress].registered, "This issuer has already registerd");
        
        Issuer memory issuer = Issuer({
            registered: true,
            certificates: new Certificate[](0)
        });
        
        issuers[issuerAddress] = issuer;
    }

    function registerCompany(address companyAddress) public onlyFounder {
        require(!companies[companyAddress].registered, "This issuer has already registerd");
        
        Company memory company = Company({
            registered: true
        });
        
        companies[companyAddress] = company;
    }


    function createCertificateToken(
            address to,
            string memory info
            
    ) public onlyRegisteredIssuer {
        uint tokenId = totalSupply();
        
        //Mint certificate
        _mint(to, tokenId);
        
        //Create a certificate on blockchain
        Certificate newCertificate = new Certificate(info, to);
        
        //Set certificate URI
        setCertAddress(tokenId, newCertificate);
        
        issuers[msg.sender].certificates.push(newCertificate);
    }
    
    function getCertificateList() public view returns(Certificate[] memory) {
        return issuers[msg.sender].certificates;
    }
    
    //Calculcate the experience
    function startJob(address employee, string memory position) public onlyRegisteredCompany {
        require(experienceList[employee].startTime == 0, "This employee have not quit his previous job yet ");
        
        experienceList[employee].startTime = now;
        experienceList[employee].preCompanies.push(msg.sender);
        
        companies[msg.sender].employees[employee] = true;
        
        employeeWorkingStatus[employee] = WorkingStatus.working;
        positions[employee].push(position);
    }
    
    function endJob(address employee) public onlyRegisteredCompany {
        require(companies[msg.sender].employees[employee], "This employee does not belong to your company");
        
        uint currentExperience = now - experienceList[employee].startTime;
        
        experienceList[employee].startTime = 0;
        experienceList[employee].lastExperience += currentExperience;
        
        employeeWorkingStatus[employee] = WorkingStatus.free;
        delete companies[msg.sender].employees[employee];
    }
    
    function getEmployeeExperience(address employee) public view returns (uint) {
        if(experienceList[employee].lastExperience == 0 && experienceList[employee].startTime == 0)
            return experienceList[employee].lastExperience;
        
        if(experienceList[employee].startTime != 0)
            return now - experienceList[employee].startTime + experienceList[employee].lastExperience;
            
        return experienceList[employee].lastExperience;
    }
    
    function getEmployeePrevCompanies(address employee) public view returns (address[] memory) {
        return experienceList[employee].preCompanies;
    }
    
    
    function setApprovalForAccessingCertificates(address to, uint256[] memory tokenIds, address[] memory certAdresses) public {
        for(uint i = 0; i < certAdresses.length; i++) {
            require(ownerOf(tokenIds[i]) == msg.sender, "You are not the owner of this token");
            Certificate certificate = Certificate(certAdresses[i]);
            certificate.setApproval(to);
            approve(to, tokenIds[i]);
        }
        
    }
    
    //Set Certificate public
    function setPublicCV(uint[] memory tokenIds, address[] memory certAdresses) public {
        require(invitedUsers[msg.sender], 'You are not invited to public CV');
        for(uint i = 0; i < certAdresses.length; i++) {
            require(ownerOf(tokenIds[i]) == msg.sender, "You are not the owner of this token");
            Certificate certificate = Certificate(certAdresses[i]);
            
            certificate.setPublic();
            isPublished[msg.sender] = true;
            
            for (uint j = 0; j < publicUsers.length; j++) 
                if (publicUsers[j] != msg.sender) publicUsers.push(msg.sender);
            
        }
    } 
    
    function unPublicCV(uint[] memory tokenIds, address[] memory certAdresses) public {
        for(uint i = 0; i < certAdresses.length; i++) {
            require(ownerOf(tokenIds[i]) == msg.sender, "You are not the owner of this token");
            Certificate certificate = Certificate(certAdresses[i]);
            
            certificate.unPublic();
            isPublished[msg.sender] = false;
        }
    }
    
    function inviteUserToPublicCV(address user) public onlyFounder {
        invitedUsers[user] = true;
    }
    
    function getPublicUsers() public view onlyFounder returns (address[] memory){
        return publicUsers;
    }
    
    //30 * 24 * 60 * 60
    function buyCVPackage() public payable onlyRegisteredCompany {
        require(msg.value >= 1 ether, 'Must pay $ for this service');
        if (msg.value == 1 ether) CVPackage[msg.sender] = Package({expiredTime: now + 60, accessTimesLimit: 3});
        if (msg.value == 2 ether) CVPackage[msg.sender] = Package({expiredTime: now + 10 * 60, accessTimesLimit: 5});      
    }
    
    function accessCV(address company) public onlyFounder {
        CVPackage[company].accessTimesLimit--;
    } 
    
    function checkExpiredPackage(address company) public view returns (bool) {
        if (now - CVPackage[company].expiredTime < 0 || CVPackage[company].accessTimesLimit == 0) return false;
        else return true;
    }
}

contract Certificate {
    address public owner;
    address public factory;
    address public issuer;
    string private certificate;
    uint public timeStamp;
    mapping(address => bool) private approvers;
    bool public isPublished;
    uint public approverCount = 0;
    
    constructor(string memory info, address ownerAddress) public {
        issuer = tx.origin;
        factory = msg.sender;
        owner = ownerAddress;
        certificate = info;
  
        approvers[issuer] = true;
        timeStamp = block.timestamp;
    }
    
    
    modifier onlyOwner() {
        require(tx.origin == owner, "You are not owner of this certificate");
        _;
    }
    
    function setApproval(address approver) external onlyOwner {
        approvers[approver] = true;
        approverCount++;
    }
    
    function setPublic() external onlyOwner {
        isPublished = true;
    }
    
    function unPublic() external onlyOwner {
        isPublished = false;
    }
    
    function getCertificateInfo() public view returns (string memory) {
        require(approvers[msg.sender] || msg.sender == owner || isPublished, "Only approvers can view the certificate");
        return certificate;
    }   
}

