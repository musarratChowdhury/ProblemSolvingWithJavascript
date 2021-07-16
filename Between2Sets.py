
# 2 3
# 2 4
# 16 32 96
# Sample Output

# 3
# Explanation

# 2 and 4 divide evenly into 4, 8, 12 and 16.
# 4, 8 and 16 divide evenly into 16, 32, 96.

# 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.



a=[2,4]#12 is a multiple of both 2,4
b=[24,36]#12 is a factor of both 24,36
#12

def getTotalX(a, b):
    # Write your code here
    multiples_a = []
    factors_b = []
    common_arr =[]
    final_result = []

    total_length =len(a)+len(b)
    
    for i in range(1,101):
        for number_a in a:
            if(i%number_a==0):#which means i is multiple of that number in array a
                multiples_a.append(i)
        for number_b in b:
            if(number_b%i==0):#which means i is a factor of that number in array b
                factors_b.append(i)

    common_arr = multiples_a + factors_b

    for number in common_arr:
        if common_arr.count(number) == total_length:
            if final_result.count(number)==0:
                 final_result.append(number)

    print(final_result)
    return len(final_result)
  
    
getTotalX(a,b)