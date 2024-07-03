import React from 'react'
import animation from "../../../../accset/json/loading.json"

import Lottie from 'lottie-react';
function Loading() {

  return (
    <div>
      <Lottie animationData={animation} style={{ width:400,height:"90vh", margin:"0 auto"}} />
    </div>
  )
}

export default Loading
