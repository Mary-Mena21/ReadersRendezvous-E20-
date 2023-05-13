import "./AboutApp.css";

export const AboutApp = () => {
    return (
        <>
            <div className="container col-sm-6 AbAppText">
                <article className="">
                    <h2>About App</h2>
                    <section className="">
                        <div>
                            Readers_Rendezvous is a web app that manages library
                            books. Built with ASP.NET Core API and React, it
                            allows users to view and save their favorite books
                            after signing in. Librarians can log in to edit,
                            delete or add books, and manage users. The app has
                            user authentication, real-time database, and search
                            functionality. The app design is available in Figma,
                            and users need Node.js, .NET, and a code editor to
                            run it. The tech stack includes ASP.NET Core API,
                            React, SQL, Bootstrap, ERD, and Figma.All Rights
                            Reserved.
                        </div>
                    </section>
                    <footer>
                        <div>© 2023 Readers Rendezvous.</div>
                    </footer>
                </article>
            </div>
        </>
    );
};
