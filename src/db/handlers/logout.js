const Users =  require('../models/Users')

const logout = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies || !cookies.jwt_cclicker) return res.sendStatus(204);
    const refreshToken = cookies.jwt_cclicker;

    const user = await Users.findOne({token:refreshToken}).select({ token: 1,pseudoname:1 });

    if (!user) {
        res.clearCookie('jwt_cclickerwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }

    // Delete refreshToken in db
    try {
            
        Object.assign(user,{token:""})
        user.save()
        
    } catch (error) {
        res.status(500).json({msg: "Logout issues"})
    }

    res.clearCookie('jwt_cclickerwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
}

module.exports = { logout }