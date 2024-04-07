# Image_Mover_Challenge

# Question

After authentication, AWS Cognito returns a JSON user object in a suboptimal, nested format with attributes that don't adhere to our variable naming conventions.

You are tasked with writing a method that, when passed a Cognito JSON object, returns a flattened object with more consistent attribute names, thereby making it easier for other parts of our software to work with user instances in an API agnostic way.

User objects will always have a UserAttributes array. It will always include sub and email entries. All other attributes are optional. Not all attributes are present in the example file.
Returned attribute names must be in TitleCase.
Prefixes (e.g. custom) should be removed. Prefixes will always be delimited by a colon.
Boolean attributes should be returned as booleans, rather than strings.
If the user has custom:tags, they are stored as a comma-delimited string. The returned object should return an array of tags so callers don't have to do string manipulation themselves.
Do not include the sub attribute in the returned object because, like code, data should also be DRY.
The returned object must include a DisplayName attribute. This should be "Family, Given", their given name or their email address, depending on what is available.
Refer to the input and output files for an example of what the method will receive and produce.

