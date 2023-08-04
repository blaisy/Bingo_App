/**
 * This is a class that renders a button. It renders the button and then calls the passed in function. 
 * 
 * Params that are defined are passed to the function with a props
 * 
 * 
 * @param {string} a string that will be displayed in the button
 * @param {string} background color of the button
 * @param {string} text color of the button
 * @param {string} style of the button
 * @returns HTMLElement [View > Button]
*/
import { View, Text, Button } from "react-native"
import React from 'react';
/**
 * Documentation for Button Component
 * 
 * @class Button
 * @extends React.Component
 * @constructor
 * 
 * What props are configurable for this component
 *  1. bg - background color of the button
 *  2. text - text color of the button
 *  3. style - style of the button
 *  4. onPress - function that will be called when the button is pressed
 *  5. disabled - boolean that determines if the button is disabled or not
 *  7. active - boolean that determines if the button is active or not (default is true)
 */
export default class EcoButton extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View className={`
                bg-${this.getBg(this.props.bg)}
                hover:bg-blue-800
                focus:ring-4 
                focus:ring-blue-300 
                font-medium 
                rounded-full 
                text-sm 
                px-5 
                py-2.5 
                mr-2 
                mb-2 
                dark:bg-blue-600 
                dark:hover:bg-blue-700 
                focus:outline-none 
                dark:focus:ring-blue-800`}>
                <Button title={`${this.getTxt(this.props.txt)}`} color={`${this.getTxtColor(this.props.color) == undefined ? 'white' : this.props.color}`} />
            </View>
        );
    }


    /** SECTION 1: 
     * A function that defines the background color of the button
     * 
     * @param {string} bg - background color of the button
     * @returns string
     */
    getBg() {
        return this.props.bg;
    }


    /** SECTION 2: 
     *  A function that defines the text of the button
     * 
     *  @param String text - text of the button
     *  @returns string
     */
    getTxt() {
        return this.props.txt;
    }

    /** SECTION 3: 
     *  A function that defines the color text of the button
     * 
     *  @param {string} text - text of the button
     *  @returns string
     */
    getTxtColor() {
        return this.props.color;
    }

    /** SECTION 4: 
     * A function that defines the style of the button
     * 
     * @param {string} style - style of the button
     * @returns string
     */
    setButtonStyle() {
        switch (this.props.style) {
            case "round":
                this.setState({ style: "rounded-full" });
                break;

            case "square":
                this.setState({ style: "" });
                break;

            default:
                this.setState({ style: "rounded-md" });
                break;
        }
    }
}



