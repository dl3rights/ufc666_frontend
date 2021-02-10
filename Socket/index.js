import socketIOClient from "socket.io-client";

const socket = socketIOClient(process.env.REACT_APP_URL)

export default socket