const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema({      
    year: {
        type: String,
        required: true,
    },	   
    projectName: {
        type: String,
        required: true,
    },	
    projectDescription: {
        type: String,
        required: true,
    },		
    aboutSection:	{
        type: [{
            title: String,
            description: String
        }],
        required: true,
    },
    rooms:	{
        type: [{
            isActive: {
                type: Boolean,
                default: false,
                required: true,
            },     
            roomId: {
                type: String,
                required: true,
            },		
            name:	{
                type: String,
                required: true,
            },
            theme:	{
                type: String,
                required: true,
            },
            description:	{
                type: String,
                required: true,
            },
            imageFull:	{
                type: String,
                required: true,
            },
            imageThumb:	{
                type: String,
                required: true,
            },
        }],
        required: true
    },
    events:	{
        type: [{
            date: {
                type: String,
                required: true,
            },		
            local:	{
                type: String,
                required: true,
            },
            time:	{
                type: String,
                required: true,
            },
            room:	{
                type: String,
                required: true,
            },
        }],
        required: true,
    },
    team: {
        columns: Number,
        people: {
            type: [{
                isActive: {
                    type: Boolean,
                    default: false,
                    required: true,
                },		
                name:	{
                    type: String,
                    required: true,
                },
                image:	{
                    type: String,
                    default: ''
                },
                role:	{
                    type: String,
                    required: true,
                },
                email:	{
                    type: {
                        emailStart: {
                            type: String,
                            default: '',
                            required: true,
                        },
                        emailEnd: {
                            type: String,
                            default: '',
                            required: true,
                        },
                        emailFull: {
                            type: String,
                            default: '',
                            required: true,
                        }
                    },
                    required: true,
                },
                social:	{
                    type: {
                        lattes: {
                            type: String
                        },
                        fb: {
                            type: String
                        },
                        ig: {
                            type: String
                        },
                        lk: {
                            type: String
                        },
                        tt: {
                            type: String
                        }
                    },
                    required: true,
                }
            }],
        }
    },
    programSection:	{
        description: String,
        programs: {
            type: [{
                name: String,
                image: String,
            }],
        }
    },
    contactSection:	{
        description: String,
        contacts: {
            type: [{
                name: {
                    type: String,
                    required: true,
                },		
                link:	{
                    type: String,
                    required: true,
                },
                logo:	[{
                    type: String,
                    required: true,
                }]
            }]
        }
    }
})

module.exports = mongoose.model('content', contentSchema);



























