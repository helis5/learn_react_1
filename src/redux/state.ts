// @ts-nocheck
import {rerenderEntireTree} from "../render";

let state = {

    navbar: {
        friends: [
            {id: '1', name: 'Andrew'},
            {id: '1', name: 'Sasha'},
            {id: '1', name: 'Svea'},
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Its my first post', likesCount: 11},
        ],
        newPostText: "Этот текст поста из state.ts",

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'LI'},
            {id: 5, message: 'LI'},
            {id: 6, message: 'LI'},
        ],
        newMessageText: "Этот текст сообщения из state.ts",
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Svea'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
    },
}

interface newPostProps {
    id: number,
    message: string,
    likesCount: number,
}

export let addPost = (postMessage: {}) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = (dialogMessage) => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export default state;