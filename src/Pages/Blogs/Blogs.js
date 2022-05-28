import React from 'react';

const Blogs = () => {
    return (
        <div className="mx-5 my-4">

            <div className="mx-5">
                <h3>Question 1 : Differences between `javascript` and `nodejs`?</h3>
                <p><b>Answer :</b>
                    <br />
                    1. Javascript can only be run in the browsers. But NodeJS can run javascript outside the browser.
                    <br />
                    2. Javascript mainly used in frontend development. Nodejs is used in server-side development.
                    <br />
                    3. Javascript works in any browser that has a proper browser engine. Node JS only works in a V8 engine which mainly used by google chrome.
                    <br />
                    4. Javascript is a programming language which is used to make the web pages more dynamic in nature. NodeJS is a Javascript runtime environment which is used to run this programming language on the server-side.
                    <br />
                    5. Some of the javascript frameworks are React, Vue.js, Meteor,  Angular etc. Some of the NodeJS frameworks are Express.js, Sails.js etc.
                </p>
            </div>

            <div className="mx-5">
                <h3>Question 2 : Differences between `sql` and `nosql` databases?
                </h3>
                <p><b>Answer :</b>
                    <br />
                    1. SQL is known be a relational database management system (rdbms). NoSQL is a Non-relational or distributed database.
                    <br />
                    2. SQL databases have a predefined schema. NoSQL databases use dynamic schema for unstructured data.
                    <br />
                    3. SQL databases are vertically scalable. NoSQL databases are horizontally scalable.
                    <br />
                    4. SQL databases support Structured Query Languages. NonSQL database does not have any declarative query language.
                    <br />
                    5. SQL databases are table based databases. NoSQL databases can be document based, key-value pairs, graph databases.
                    <br />
                    6. Some SQL databases are MySQL, Oracle, PostgreSQL etc. Nosql databases are  Cassandra, Hbase, MongoDB, Redis, RavenDB etc.
                </p>
            </div>
            <div className="mx-5">
                <h3>Question 3 : What is the purpose of `jwt` and how does it work?</h3>
                <p><b>Answer :</b>
                    <br />
                    JWT, or JSON Web Token, is an open standard used to share information between parties securely  as a JSON object. A JWT is a string made up of three parts : header, payload, signature and separated by dots (.), and serialized using base64. In authentication, when the user successfully sign-in using their username and password, a JSON Web Token will be returned. Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The server's protected routes will verify the authenticity of the token in the Authorization header. If it's present, the user will be allowed to access protected resources. These tokens shouldn't be stored in publicly accessible areas.
                </p>
            </div>
        </div>
    );
};

export default Blogs;