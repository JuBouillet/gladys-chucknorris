module.exports = {
    sentenceFact:
    {
        "uuid": "e2483aa1-58ee-46b1-ad2b-343dc450c025",
        "text": "Parle moi de Chuck Norris",
        "label": "cnfacts.say",
        "service": "cnfacts",
        "language": "fr"
    },
    attributes: {
        uuid: {
            type: 'string',
            uuid: true,
            required: true,
            unique: true
        },

        text: {
            type: 'string',
            required: true
        },

        label: {
            type: 'string',
            required: true
        },

        service: {
            type: 'string',
            required: true
        },

        language: {
            type: 'string',
            required: true
        },
        status: {
            type: 'string',
            enum: ['pending', 'rejected', 'approved', 'official'],
            defaultsTo: 'pending'
        }
    }
}