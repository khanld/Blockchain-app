import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import { connect } from "react-redux"
import Spinner from './components/UI/Spinner/Spinner'
import { withRouter, Switch } from 'react-router-dom'
import IusserForm from './components/Form/IssuerRegister'
import CompanyrForm from './components/Form/CompanyRegister'
import Companies from './containers/Manament/Companies';
import Issuers from './containers/Manament/Issuers';
import Certificate from './components/Form/CertificateCreation';
import Guide from './containers/Guide/Guide';
import Course from './components/Course/Course';
import SingleCourse from './components/Course/SingleCourse/SingleCourse'
import { Redirect } from 'react-router-dom'
import CertificateManagement from './containers/CertificateManagement/CertificateManagement';
import CV from './components/CV/CV';
//import LuckyWheel from './components/LuckyWheel/LuckyWheel';
import Jobs from './containers/Jobs/Jobs';
import Candidates from './containers/Candidates/Candidate';
import Playground from './containers/PLayground/Playground';
import Service from './containers/Service/Service';
import DataPackage from './containers/DataPakage/DataPackage';

class App extends Component {
  render() {
    let content = (
      <Layout inHome={this.props.location.pathname === "/"}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registerIssuer" component={IusserForm} />
          <Route path="/registerCompany" component={CompanyrForm} />
          <Route path="/companyList" component={Companies} />
          <Route path="/SchoolList" component={Issuers} />
          <Route path="/createCertificate" component={Certificate} />
          <Route path="/guide" component={Guide} />
          <Route path="/courses" exact component={Course} />
          <Route path="/singleCourse" exact component={SingleCourse} />
          <Route path="/certificates" component={CertificateManagement} />
          <Route path="/CV" component={CV} />
          <Route path="/playground" component={Playground} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/candidates" exact component={Candidates} />
          <Route path="/candidates/CV" component={CV} />
          <Route path="/service" component={Service} />
          <Route path="/CVPackage" component={DataPackage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    )
    if (this.props.loading) content = <div style={{ position: "fixed", top: "30%", left: "0", right: "0" }}><Spinner /></div>
    if (this.props.error) content = <p>Error</p>

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(withRouter(App));
