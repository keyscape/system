const User = require('../models/User.model');

const bcrypt = require('bcryptjs')

module.exports = {
    create: async (userData) => {
        try{

            if(!(await User.exists({username: userData.username}))){

                let newUser = new User({
                    username: userData.username,
                    passwordHash: bcrypt.hashSync(userData.password),
                    fullName: userData.fullName,
                    email: userData.email,
                    ra: userData.ra,
                    age: userData.age,
                    cpf: userData.cpf,
                    edu: userData.edu,
                    isAdmin: false,
                })

                await newUser.save()

                console.log('---> Create User OK <---\n')

                return {err: false, message: 'Ok'}

            }
            else{
                return {err: true, message: 'Erro: O nome de usuário já existe'}
            }
        }
        catch(err){
            console.log('---> Create User Error <---\n' + err)
            return {err: true, message: 'Erro: Verifique os dados e tente novamente'}
        }
    },
    delete: async (groupIdStr) => {
        //await Group.deleteOne({ _id: new ObjectId(groupIdStr) })
    }
}