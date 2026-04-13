var marks = Array(6)
var marks = [90, 80, 70, 60, 50, 40]
console.log(marks[0])
console.log(marks[1])
var i = marks.length
console.log(i)
marks.push(30)
console.log(marks.length)
marks.pop()
console.log(marks.length)
marks.unshift(100)
console.log(marks.length)
console.log(marks)
//indexes
console.log(marks.indexOf(70))
var j=marks.includes(80)
console.log(j)
marks.slice(2,4)
console.log(marks)
marks.splice(2,2)
console.log(marks)
var sum=0
for ( let k=0;k<marks.length;k++)
{
    console.log(marks[k])
    sum=sum+marks[k]

}
console.log(sum)