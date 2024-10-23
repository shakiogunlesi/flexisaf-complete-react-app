import React, { Component, Fragment } from 'react';
import UserProfile from './UserProfile';
import Timer from './Timer';


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  // Simulate fetching data
  componentDidMount() {
    const users = [
      {
        id: 1,
        name: 'Nwadei Shakirat',
        description: 'A passionate developer from Nigeria',
        image: '/images/shakirat3.jpg'
      },
      {
        id: 2,
        name: 'Omojua David',
        description: 'A creative designer from New York.',
        image: '/images/shakirat3.jpg'
      },
      {
        id: 3,
        name: 'Alice Modupe',
        description: 'A front-end engineer from Texas.',
        image: '/images/shakirat3.jpg'
      }
    ];

    // Simulate fetching and updating state
    setTimeout(() => {
      this.setState({ users });
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <h1 className="text-4xl font-bold text-center mt-6">Meet Our Team</h1>
        <div className="flex flex-wrap justify-center mt-6">
          {this.state.users.length > 0 ? (
            this.state.users.map(user => (
              <UserProfile key={user.id} user={user} />
            ))
          ) : (
            <p className="text-center">Loading profiles...</p>
          )}
        </div>
        <Timer />
      </Fragment>
    );
  }
}

export default LandingPage;
