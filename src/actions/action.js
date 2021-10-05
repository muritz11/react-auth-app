export function addUser(newUser) {
    return {
        type: "ADD_USER",
        data: newUser
    }
}

export function errMsg(msg) {
    return {
        type: "NEW_ERR",
        data: msg
    }
}

export function succMsg(msg) {
    return {
        type: "NEW_SUCC",
        data: msg
    }
}

export function log(val) {
    return {
        type: "LOGGED_IN",
        data: val
    }
}

export function authUser(val) {
    return {
        type: "AUTH",
        data: val
    }
}

export function redir(val) {
    return {
        type: "REDIRECT",
        data: val
    }
}