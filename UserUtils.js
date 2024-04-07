//Run this: remove the comments in the bottom of this file
// node UserUtils.js


function parseAttributes(user) {
    
    const parsedAttributes = {};
  
    user.UserAttributes.forEach(attribute => {
      const { Name, Value } = attribute;
  
      const attributeName = Name.split(':').pop();
      const camelCaseName = attributeName.replace(/_./g, s => s.charAt(1).toUpperCase());
      const titleCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
  
      if (Value === 'true' || Value === 'false') {
        parsedAttributes[titleCaseName] = Value === 'true';
      } else if (attributeName === 'tags') {
        parsedAttributes[titleCaseName] = Value.split(',');
      } else {
        parsedAttributes[titleCaseName] = Value;
      }
    });
  
    delete parsedAttributes.Sub;
  
    if (parsedAttributes.FamilyName && parsedAttributes.GivenName) {
      parsedAttributes.DisplayName = `${parsedAttributes.FamilyName}, ${parsedAttributes.GivenName}`;
    } else if (parsedAttributes.GivenName) {
      parsedAttributes.DisplayName = parsedAttributes.GivenName;
    } else {
      parsedAttributes.DisplayName = user.Email;
    }
  
    ['Username', 'UserCreateDate', 'UserLastModifiedDate', 'Enabled', 'UserStatus'].forEach(attr => {
      parsedAttributes[attr] = user[attr];
    });
  
    return parsedAttributes;
  }
  


//   const input = {
//     "Username": "00d23c55-51b4-49e3-a1ba-8e9b2685ab70",
//     "UserAttributes": [
//       {
//         "Name": "sub",
//         "Value": "00d23c55-51b4-49e3-a1ba-8e9b2685ab70"
//       },
//       {
//         "Name": "email_verified",
//         "Value": "true"
//       },
//       {
//         "Name": "email",
//         "Value": "sally@example.com"
//       },
//       {
//         "Name": "given_name",
//         "Value": "Sally"
//       },
//       {
//         "Name": "family_name",
//         "Value": "Slingshot"
//       },
//       {
//         "Name": "custom:tags",
//         "Value": "hockey,basketball,baseball"
//       }
//     ],
//     "UserCreateDate": "2021-04-13T15:50:42.802Z",
//     "UserLastModifiedDate": "2021-04-13T15:50:51.671Z",
//     "Enabled": true,
//     "UserStatus": "CONFIRMED"
//   };
  
//   const output = parseAttributes(input);
//   console.log(output);
  

