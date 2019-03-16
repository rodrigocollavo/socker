import React, { Component, lazy, Suspense } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';

class Container extends Component {
  constructor(props) {
    super(props);

    this.containerId = this.props.match.params.id;

    this.state = {
    };
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="animated fadeIn">
        <Card color="secondary">
          <CardBody>
            <div>Id: ba033ac4401106a3b513bc9d639eee123ad78ca3616b921167cd74b20e25ed39</div>
            <div>Created: 2015-01-06T15:47:31.485331387Z</div>
            <div>Image: 04c5d3b7b0656168630d3ba35d8889bd0e9caafcaeb3004d2bfbc47e7c5d35d2</div>
          </CardBody>
        </Card>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card color="primary">
              <CardHeader>
                Network
              </CardHeader>
              <CardBody>
                <div>IP Address: 192.168.0.12</div>
                <div>Mac Address: "aa:ff:aa:ff:aa:ff"</div>
                <div>Endpoint ID: "end-id"</div>
                <div>Networks:</div>
                <div>    - Bridge</div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card color="primary">
              <CardHeader>
                Mounts
              </CardHeader>
              <CardBody>
                <div>Name: "fac362...80535"</div>
                <div>Source: /data</div>
                <div>Destination: /data</div>
                <div>Driver: local</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Container;
