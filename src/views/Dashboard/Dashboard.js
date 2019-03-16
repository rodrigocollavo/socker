import React, { Component, lazy, Suspense } from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';
const WidgetContainer = lazy(() => import('../../views/Widgets/WidgetContainer'));

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    var containers = [
      {
        header: "nginx",
        mainText: "nginx/nginx:latest",
        id: '897a987be'
      },
      {
        header: "website",
        mainText: "go:latest",
        id: '897a987be'
      },
      {
        header: "proxy",
        mainText: "my-proxy-image",
        id: '897a987be'
      }
    ]

    var containersDisabled = [
      {
        header: "nginx",
        mainText: "nginx/nginx:latest",
        id: '897a987be'
      },
      {
        header: "website",
        mainText: "go:latest",
        id: '897a987be'
      }
    ]
    return (
      <div className="animated fadeIn">
        <Row>
          {
            containers.map(container => {
            return (
              <Col xs="12" sm="6" lg="3">
                <Link to={'/container/' + container.id}>
                  <WidgetContainer
                    color="success"
                    header={container.header}
                    mainText={container.mainText}
                    id={container.id}
                    invert
                  />
                </Link>
              </Col>
            );
            })
          }
        </Row>
        <Row>
          {
            containersDisabled.map(container => {
            return (
              <Col xs="12" sm="6" lg="3">
                <Link to={'/container/' + container.id}>
                  <WidgetContainer
                    color="danger"
                    header={container.header}
                    mainText={container.mainText}
                    id={container.id}
                    invert
                  />
                </Link>
              </Col>
            );
            })
          }
        </Row>
      </div>
    );
  }
}

export default Dashboard;
