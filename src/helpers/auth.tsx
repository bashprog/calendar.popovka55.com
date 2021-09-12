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
                    this.writeInfo(result.data.loginByToken);
                } else {
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
                    this.writeInfo(result.data.login);
                } else {
                    this.error = true;
                    this.errorMessage = "Invalid email or password";
                }
            })
    }

    writeInfo(data: any){
        const {_id, name, email, token} = data;

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
    }

    getInfo = () => {
        return {
            ...this
        }
    };
}

export default new Auth();
