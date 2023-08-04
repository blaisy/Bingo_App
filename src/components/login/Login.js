import { View, Text, Image, Button } from 'react-native';
import React from 'react';
import EcoButton from '../../Utils/EcoButton';
/**
 * This is the main core of the component Login.
 * It renders the login form. It also check if the user is logged in or not and retrieve 
 * the user's information from rust server.
 * 
 * @class Login
 * @extends React.Component
 * @params {String}
 * @return {HTMLElement}
 */

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    render() {
        return (
            <View>
                <View className="bg-green-900 flex items-center justify-center h-screen ">
                    <View className=" text-white  pb-10  ">
                        <Image className=" h-60 w-60 rounded-full"
                            source={{
                                uri: 'https://images.unsplash.com/photo-1559509546-4f2fdd5d5825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
                            }} />
                    </View>

                    <View className="text-white pb-10 ">
                        <Text className="text-white text-lg text-justify ">The only ECOproductivity app you need</Text>
                    </View>

                    <View className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <Button title='Sign-In with email' color={"white"}></Button>
                    </View>

                    {/* This button have to interface the google client */}
                    <View className="pt-10 flex flex-row">
                        <EcoButton txt="Google"  bg = "white" color="white"/>
                        <EcoButton txt="AppleId" bg = "white" color="white"/>
                    </View >

                </View>

            </View>
        );
    }
    // <EcoButton txt = "test" bg = "red"></EcoButton>

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }
    login(username, password) {
        this.props.login(username, password);
    }
    logout() {
        this.props.logout();
    }
    isAuthenticated() {
        return this.props.isAuthenticated;
    }
    //TODO: Add a method to check if the user is an admin or not.
    isAdmin() { //if is admin then return all the users authenticated in the system and related to the current agency
        return this.props.isAdmin;
    }
    getUsername() {
        return this.props.username;
    }
    getPassword() {
        return this.props.password;
    }
    getUserId() {
        return this.props.userId;
    }
    getEmail() {
        return this.props.email;
    }
    getName() { // TODO: check if this function is needed.  
        return this.props.name;
    }
    getAvatar() {
        return this.props.avatar;
    }
}






