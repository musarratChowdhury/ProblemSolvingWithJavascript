#



scores = [3 ,4 ,21 ,36 ,10 ,28 ,35, 5 ,24 ,42]

def breakingRecords(scores):
    # Write your code here
    temporary_max = scores[0]
    temporary_min = scores[0]
    maximum_score = []
    minimum_score = []
    result_arr = []
    
    for score in scores:
        if score<temporary_min:
            minimum_score.append(score)
            temporary_min = score
        if score>temporary_max:
            maximum_score.append(score)
            temporary_max =score
    result_arr.append(len(maximum_score))
    result_arr.append(len(minimum_score))
    return result_arr

breakingRecords(scores)