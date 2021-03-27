$(() => {
  myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  let base = {
    x: Math.floor(window.innerWidth / 2),
    y: Math.floor(window.innerHeight / 2)
  }



  function rp(object, no, axis) { //Read Points
    if (axis == "x") return base.x - 50 + Object.values(object)[no - 1][0]
    else return base.y - Object.values(object)[no - 1][1]
  }

  function drawBase() {
    ctx.strokeStyle = "white"
    ctx.moveTo(base.x - 50, base.y)
    ctx.lineTo(base.x + 50, base.y)
    ctx.stroke()
  }

  function adjustEnds() {
    if (Object.values(redFlame)[1][1] > 15) {
      let lowerFlame = setInterval(() => {
        Object.values(redFlame)[1][1] -= 1
        if (Object.values(redFlame)[1][1] < 5) clearInterval(lowerFlame)
      }, 10);
    } else if (Object.values(redFlame)[Object.values(redFlame).length - 2][1] > 15) {
      let lowerFlame2 = setInterval(() => {
        Object.values(redFlame)[Object.values(redFlame).length - 2][1] -= 1
        if (Object.values(redFlame)[Object.values(redFlame).length - 2][1] < 5) clearInterval(lowerFlame2)
      }, 10);
    }

    /* if (Object.values(redFlame)[1][1] > 15) Object.values(redFlame)[1][1] = 1 */
    /* if (Object.values(redFlame)[Object.values(redFlame).length - 2][1] > 15) Object.values(redFlame)[Object.values(redFlame).length - 2][1] = 1 */
  }

  function plotPoints(obj) {
    if (obj == redFlame) {
      ctx.strokeStyle = 'red'
      ctx.fillStyle = 'red'
    } else if (obj == orangeFlame) {
      ctx.strokeStyle = 'orange'
      ctx.fillStyle = 'orange'
    } else if (obj == yellowFlame) {
      ctx.strokeStyle = 'yellow'
      ctx.fillStyle = 'yellow'
    }
    ctx.moveTo(rp(obj, 1, "x"), rp(obj, 1, "y"))
    /* console.log(Object.values(obj).length) */

    for (let i = 2; i <= Object.values(obj).length; i++) {
      ctx.lineTo(rp(obj, i, "x"), rp(obj, i, "y"))
      /* console.log(`${rp(obj, i, "x")+' '+ rp(obj, i, "y")}`) */
    }

    ctx.stroke()
    ctx.fill()
  }

  function raisePoints(obj) {
    if (obj == redFlame) {
      ctx.moveTo(rp(obj, 1, "x"), rp(obj, 1, "y"))

      for (let i = 1; i < Object.values(obj).length - 1; i++) {
        Object.values(obj)[i][1] += Math.round(Math.random() * 2)
        /* console.log(Object.values(obj)[i]) */
      }
    } else if (obj == orangeFlame) {
      for (let i = 1; i < Object.values(obj).length - 1; i++) {
        Object.values(obj)[i][1] = (Object.values(redFlame)[i][1] * 2) + 30
      }
    } else if (obj == yellowFlame) {
      for (let i = 1; i < Object.values(obj).length - 1; i++) {
        Object.values(obj)[i][1] = (Object.values(redFlame)[i][1] * 3) + 70
      }
    }

  }

  function highestPoint(obj) {
    let highest = 0
    for (let i = 2; i < Object.values(obj).length - 2; i++) {
      if (Object.values(obj)[highest][1] < Object.values(obj)[i][1]) highest = i
      /* console.log(highest) */
    }
    if (Object.values(obj)[highest][1] > 30) {

      let lowerFlame = setInterval(() => {
        Object.values(obj)[highest][1] -= 2
        if (Object.values(obj)[highest][1] <= (Object.values(obj)[highest + 1][1] + Object.values(obj)[highest - 1][1]) / 4) clearInterval(lowerFlame)
      }, 10);
      return
    }
    Object.values(obj)[highest][1] += Math.floor(Math.random() * 2) + 2
  }

  let redFlame = {
    point1: [0, 0],
    point2: [10, 3],
    point3: [20, 6],
    point4: [30, 9],
    point5: [40, 15],
    point6: [50, 20],
    point7: [60, 15],
    point8: [70, 9],
    point9: [80, 6],
    point10: [90, 3],
    point11: [100, 0]
  }

  let orangeFlame = {
    point1: [Object.values(redFlame)[0][0], Object.values(redFlame)[0][1]],
    point2: [Object.values(redFlame)[1][0], Object.values(redFlame)[1][1]],
    point3: [Object.values(redFlame)[2][0], Object.values(redFlame)[2][1]],
    point4: [Object.values(redFlame)[3][0], Object.values(redFlame)[3][1]],
    point5: [Object.values(redFlame)[4][0], Object.values(redFlame)[4][1]],
    point6: [Object.values(redFlame)[5][0], Object.values(redFlame)[5][1]],
    point7: [Object.values(redFlame)[6][0], Object.values(redFlame)[6][1]],
    point8: [Object.values(redFlame)[7][0], Object.values(redFlame)[7][1]],
    point9: [Object.values(redFlame)[8][0], Object.values(redFlame)[8][1]],
    point10: [Object.values(redFlame)[9][0], Object.values(redFlame)[9][1]],
    point11: [Object.values(redFlame)[10][0], Object.values(redFlame)[10][1]]
  }

  let yellowFlame = {
    point1: [Object.values(redFlame)[0][0], Object.values(redFlame)[0][1]],
    point2: [Object.values(redFlame)[1][0], Object.values(redFlame)[1][1]],
    point3: [Object.values(redFlame)[2][0], Object.values(redFlame)[2][1]],
    point4: [Object.values(redFlame)[3][0], Object.values(redFlame)[3][1]],
    point5: [Object.values(redFlame)[4][0], Object.values(redFlame)[4][1]],
    point6: [Object.values(redFlame)[5][0], Object.values(redFlame)[5][1]],
    point7: [Object.values(redFlame)[6][0], Object.values(redFlame)[6][1]],
    point8: [Object.values(redFlame)[7][0], Object.values(redFlame)[7][1]],
    point9: [Object.values(redFlame)[8][0], Object.values(redFlame)[8][1]],
    point10: [Object.values(redFlame)[9][0], Object.values(redFlame)[9][1]],
    point11: [Object.values(redFlame)[10][0], Object.values(redFlame)[10][1]]
  }

  /*   console.log(Object.values(redFlame)[2])
    console.log(rp(redFlame, 3, "y")) */


  setInterval(() => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.beginPath()
    drawBase()
    highestPoint(redFlame)
    ctx.beginPath()
    plotPoints(yellowFlame)
    raisePoints(yellowFlame)
    ctx.beginPath()
    plotPoints(orangeFlame)
    raisePoints(orangeFlame)
    ctx.beginPath()
    raisePoints(redFlame)
    plotPoints(redFlame)
    adjustEnds()
  }, 30);

  /*   setInterval(() => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      
    }, 500); */
  /* raisePoints(redFlame)
  raisePoints(redFlame)
  raisePoints(redFlame)
  raisePoints(redFlame) */
})