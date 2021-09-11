class Auth {
    authenticated: boolean;
    error: boolean;
    errorMessage: string;

    _id: string;
    name: string;
    email: string;
    token: string;

    constructor() {
        this.authenticated = false;
        this.error = false;
        this.errorMessage = "";

        this._id = "";
        this.name = "";
        this.email = "";
        this.token = "";
    }

    loginByToken(token: string) {
        return fetch('http://localhost:4001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query loginByToken($token: String!){
                        loginByToken(token: $token){
                            _id
                            name
                            email
                            token
                        }}
                    `,
                variables: {
                    token: token
                },
            })
        }).then(res => res.json())
            .then(result => {
                if (result.data.loginByToken) {
                    const {_id, name, email, token} = result.data.loginByToken;

                    if (_id) {
                        this._id = _id
                    } else {
                        this.error = true;
                        this.errorMessage += " No _id field";
                        return;
                    }

                    if (email) {
                        this.email = email
                    } else {
                        this.error = true;
                        this.errorMessage += " No email field";
                        return;
                    }

                    if (name) {
                        this.name = name;
                    } else {
                        this.error = true;
                        this.errorMessage += " No name field";
                        return;
                    }

                    if (token) {
                        this.token = token;
                    } else {
                        this.error = true;
                        this.errorMessage += " No token field";
                        return;
                    }

                    this.authenticated = true;
                } else {
                    // this.error = true;
                    this.errorMessage = "Cannot find user with token";
                }
            });
    }

    loginByPassword(email: string, password: string) {
        return fetch('http://localhost:4001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    mutation loginByPassword($email: String!, $password: String!){
                        login(email: $email, password: $password){
                            _id
                            name
                            email
                            token
                        }}
                    `,
                variables: {
                    email: email,
                    password: password
                },
            })
        }).then(r => r.json())
            .then(result => {
                if (result.data.login) {
                    const {_id, name, email, token} = result.data.login;

                    if (_id) {
                        this._id = _id
                    } else {
                        this.error = true;
                        this.errorMessage += " No _id field";
                        return;
                    }

                    if (email) {
                        this.email = email
                    } else {
                        this.error = true;
                        this.errorMessage += " No email field";
                        return;
                    }

                    if (name) {
                        this.name = name;
                    } else {
                        this.error = true;
                        this.errorMessage += " No name field";
                        return;
                    }

                    if (token) {
                        this.token = token;
                    } else {
                        this.error = true;
                        this.errorMessage += " No token field";
                        return;
                    }

                    this.authenticated = true;
                } else {
                    this.error = true;
                    this.errorMessage = "Invalid email or password";
                }
            })
    }

    getInfo = () => {
        return {
            // authenticated: this.authenticated,
            // error: this.error,
            // errorMessage: this.errorMessage,
            // _id: this._id,
            // name: this.name,
            // email: this.email,
            // token: this.token
            ...this
        }
    };
}

export default new Auth();
