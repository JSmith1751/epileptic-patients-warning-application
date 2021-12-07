
export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
        : {}

const setUser = user =>
    window.localStorage.setItem("gatsbyUser", JSON.stringify(user))



export const handleLogin = ({ username, password, data }) => {

    for (var i = 0; i < data.length; i++) {       

        if (data[i].node.username ===  username  && data[i].node.pass === password ) {

            return setUser({
                username: data[i].node.username,
                password: data[i].node.pass,
                authLevel: data[i].node.authlevel,
                firstname: data[i].node.firstname,
                lastname: data[i].node.lastname,
                DOB: data[i].node.DOB,
                gender: data[i].node.gender,
                address: data[i].node.address,
                postcode: data[i].node.postcode,
                yearsSuffered: data[i].node.yearsSuffered,
                seizureTypes: data[i].node.seizureTypes,
                epilepticTriggers: data[i].node.epilepticTriggers,
                occuranceFrequency: data[i].node.occuranceFrequency,
                mentalReport: data[i].node.mentalReport,
                mediaRecommended: data[i].node.mediaRecommended

            })
        }
    }

    return false
}

export const isAuthed = () => {
    const user = getUser()
    if (user.authLevel === 1) {
        return (!!user.username)
    }

    return false
}


export const isLoggedIn = () => {
    const user = getUser()


    return !!user.username
}

export const logout = callback => {
    setUser({})
    callback()
}


