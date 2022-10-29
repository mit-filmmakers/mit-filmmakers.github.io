import * as React from "react";
import "../styles/index.scss";
import { FaCheck } from "react-icons/fa";

const endpoint = "https://publicactiontrigger.azurewebsites.net/api/dispatches/mit-filmmakers/mit-filmmakers.github.io";

enum Status {
    idle,
    submitting,
    finished
}

interface AdminState {
    status: Status
}

class Admin extends React.Component<object, AdminState> {
    state = {
        status: Status.idle
    }

    async rebuild() {
        this.setState({status: Status.submitting});
        await fetch(endpoint, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ event_type: 'admin-page', client_payload: { data: 'somedata' } })
        });
        this.setState({status: Status.finished});
        await new Promise(res => setTimeout(res, 4000));
        this.setState({status: Status.idle});
    }

    render() {
        return <div style={{display: 'flex', justifyContent: 'center', padding: "2rem"}}>
            { this.state.status == Status.finished ?
            <span className={`button is-info`} style={{minWidth: '5.5rem'}}>
                <FaCheck />
            </span> :
            this.state.status == Status.submitting ?
            <span className={`button is-info is-loading`} style={{minWidth: '5.5rem'}}>Rebuild</span> :
            <span className={`button is-info`} style={{minWidth: '5.5rem'}} onClick={() => this.rebuild()}>Rebuild</span>
            }
        </div>
    }
}

export default Admin;
