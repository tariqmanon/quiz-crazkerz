import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2>Our Blogs</h2>
            <div className='blog-content'>
                <h4>Q1:what is purpose of react router</h4>
                <p><small>Ans: React Router is a popular routing library for React applications. It enables developers to manage the application's navigation and routing declaratively by mapping URLs to components. Its purpose is to provide a seamless user experience by enabling users to move between different views or pages within a single-page application (SPA) without having to refresh the page.

                    React Router provides several features such as routing configuration, nested routing, dynamic routing, code splitting, server-side rendering, and navigation guards. With these features, developers can easily create complex, dynamic, and scalable applications that are easy to navigate and maintain.

                    In summary, React Router's purpose is to provide a flexible and powerful way to manage the navigation and routing in React applications, allowing developers to build complex, dynamic, and scalable web applications with a seamless user experience.</small></p>
            </div>
            <div className='blog-content'>
                <h4>Q1:what is purpose of react router</h4>
                <p><small>Ans: React Router is a popular routing library for React applications. It enables developers to manage the application's navigation and routing declaratively by mapping URLs to components. Its purpose is to provide a seamless user experience by enabling users to move between different views or pages within a single-page application (SPA) without having to refresh the page.

                    React Router provides several features such as routing configuration, nested routing, dynamic routing, code splitting, server-side rendering, and navigation guards. With these features, developers can easily create complex, dynamic, and scalable applications that are easy to navigate and maintain.

                    In summary, React Router's purpose is to provide a flexible and powerful way to manage the navigation and routing in React applications, allowing developers to build complex, dynamic, and scalable web applications with a seamless user experience.</small></p>
            </div>
            <div className='blog-content'>
                <h4>Q1:How does context api works ?</h4>
                <p><small>Ans: RHere's a brief overview of how the Context API works:
                    <br></br>
                    1.First, you define a context object using the createContext() method. This creates a new context that can be used to share data between components.<br></br>

                    2.Then, you wrap the components that need to access the context in a Provider component. This provider component accepts a value prop that contains the data you want to share.

                    <br></br>
                    3.To access the data in the child components, you use the useContext() hook. This hook takes the context object as an argument and returns the current value of the context.<br></br>
                    4.When the data in the context object changes, all the child components that use the context will re-render with the updated data<br></br>
                    That's the basic idea behind the Context API. By using context,
                </small></p>
            </div>

        </div >
    );
};

export default Blog;