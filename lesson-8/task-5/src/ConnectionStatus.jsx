import React from "react";

class ConnectionStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'online',
        };
    }

    componentDidMount() {
        window.addEventListener('online', this.handleOnline);
        window.addEventListener('offline', this.handleOffline);
        this.updateNetworkStatus();
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.handleOnline);
        window.removeEventListener('offline', this.handleOffline);
    }

    updateNetworkStatus = () => {
        this.setState({
            status: navigator.onLine ? 'online' : 'offline'
        });
    }

    handleOnline = () => {
        this.setState({ status: 'online' });
    }

    handleOffline = () => {
        this.setState({ status: 'offline' });
    }

    render() {
        const { status } = this.state;
        const statusClass = status === 'offline' ? 'status_offline' : '';

        return (
            <div className={`status ${statusClass}`}>{status}</div>
        );
    }
}

export default ConnectionStatus;