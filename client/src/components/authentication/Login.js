import React, {Component} from 'react';

export class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: '',
      };

      this.handleInputChange = this.handleInputChange.bind(this);
   }

   handleInputChange(event) {
      const target = event.target;

      this.setState({
         [target.name]: target.value,
      });
      console.log(this.sta)
   }

   render() {
      return (
         <div className="container form">
            <form action="post" className="form-signin">
               <label htmlFor="username">Username</label>
               <input
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={this.handleInputChange}
               />

               <label htmlFor="password">Password</label>
               <input
                  type="text"
                  name="password"
                  className="form-control"
                  onChange={this.handleInputChange}
               />

               <button type="submit" className="btn btn-lg btn-primary btn-block mt-3">
                  Login
               </button>
            </form>
         </div>
      );
   }
}

// import React from 'react';

// export default function Login() {
//    return (
//       <div className="container form">
//          <form action="post" className="form-signin">
//             <label htmlFor="username">Username</label>
//             <input type="text" className="form-control" />
//             <label htmlFor="password">Password</label>
//             <input type="text" className="form-control" />
//             <input type="submit" class="btn btn-lg btn-primary btn-block mt-3" value="Log In"></input>
//          </form>
//       </div>
//    );
// }
