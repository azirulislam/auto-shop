import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog'>
        <h5> About differences between javascript and nodejs.</h5> 
        <p> Ans: JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language.Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS.Javascript is used in frontend development.Nodejs is used in server-side development.</p>

         <h5>2 About differences between sql and nosql databases..</h5>
         <p>Ans : SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases have fixed or static or predefined schema.NoSQL  have dynamic schema.SQL relational database management system.NoSQL Non-relational or distributed database system. </p>

         <h5>3 About the purpose of using jwt and it work.</h5>
         <p> ans :  JWTs are used as a secure way to authenticate users and share information.Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand.</p>

     </div>
    );
};

export default Blogs;