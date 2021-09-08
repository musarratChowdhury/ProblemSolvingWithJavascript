from typing import final

files = [5,3,1]
numofCore = 5
limit = 3


def minTime(files, numCores, limit):
    # Write your code here
    
    final_time=[]
    numberofTimesDone=0
    result=0
    parallel_candidates =[]
    #lets find out how many of the files we can do parralel now
    for file in files:
        if(file%numCores==0):
            parallel_candidates.append(file)
        else:
           final_time.append(file)
    print(final_time)
    parallel_candidates.sort()
    parallel_candidates.reverse()
    print(parallel_candidates)
    for file in parallel_candidates:
          if numberofTimesDone<limit:
            final_time.append(int(file/numCores)) 
            numberofTimesDone = numberofTimesDone+1
          else:
            final_time.append(file)
    print(final_time)
    for i in final_time:
            result+=i
    print(result)
    return result
        
minTime(files,numofCore,limit)
