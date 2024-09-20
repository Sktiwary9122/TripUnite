const  zod  = require('zod');

const tripSchema = zod.object({
  Name: zod.string().nonempty(),
  Destination: zod.string().nonempty(),
  Description: zod.string().nonempty(),
  StartDate: zod.date(),
  EndDate: zod.date(),
  // Location: zod.string().nonempty(),
  estimatedBudget: zod.string().nonempty(),
  TravellerCount: zod.number().optional(), // Not required, so optional
  localGuide: zod.boolean(),
  MeetUPLocation: zod.string().nonempty(),
  
    Gender: zod.string().optional(), // Not required, so optional
   // Marking the whole Preferences object as optional
  MinAge: zod.number(),
  MaxAge: zod.number(),
  Remark: zod.string().optional(),
  createdBy: zod.string() // Refers to user IDs, validated as strings
});

module.exports = tripSchema;