import React from 'react';
import AutoText from 'react-auto-text';
 
function MyComponent() {
  return (
    <AutoText
      maxHeight={200}
      maxFontSize={20}
      minFontSize={10}
      onChange={fontSize => console.log(fontSize)}>
        Bacon ipsum dolor amet filet mignon salami andouille corned beef.
    </AutoText>
  );
}
 
export default MyComponent;