const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    frequency: { type: String },
    category: {
        type: String,
        enum: ['professional', 'personal', 'rest'],
        required: true
    },
    preferredDays: {
        type: [String],
        enum: ['weekdays', 'weekends', 'both'],
        default: [],
        validate: {
            validator: function (value) {
                // Ensure preferredDays contain valid values
                return value.every(day => ['weekdays', 'weekends', 'both'].includes(day));
            },
            message: props => `${props.value} is not a valid day.`
        }
    },
    preferredTimes: {
        type: [String],
        validate: {
            validator: function (value) {
                // Custom validation logic if needed for preferredTimes
                return true; // Add your validation logic here
            },
            message: props => `${props.value} is not a valid time.`
        }
    }
});

// Ensure the total task durations do not exceed the monthly limit
taskSchema.pre('validate', function (next) {
    let totalHours;
    if (this.frequency === 'weekly') {
        totalHours = this.duration * 4; // For weekly frequency, consider 4 weeks in a month
    } else if (this.frequency === 'daily') {
        totalHours = this.duration * 28 / 7; // For daily frequency, consider 28 days in a month
    }
    if (totalHours > 672) {
        return next(new Error('Total task duration exceeds the monthly limit of 672 hours.'));
    }
    next();
});

module.exports = mongoose.model('Task', taskSchema);
