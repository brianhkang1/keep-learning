# Intro  

Big-O is essentially an equation how the run time scales with respect to some input variables

linear = O(N) where N is size of array  
O(N^2) where N is size of array  

# Four Important rules of Big O

### If you have two different steps in your algorithm, you add those steps

Example:  
doStep1() => O(a)  
doStep2() => O(b)  

Total would be O(a+b)

### Drop constants  

0(2n) === O(N)  
All that matters is how things scale roughly-- i.e. is it a linear relationship, or a quadratic relationship?  

### If you have different inputs, usually you use different var  

function hello(){
  for a in arrayA{
    for b in arrayB{
      if a === b {
        count = count + 1
      }
    }
  }
  return count
}  

function above would have a big O of O(a*b), NOT O(N^2)  


### Drop non-dominate terms  

O(N + N^2) === O(N^2)
