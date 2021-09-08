#
#
s = 7
t = 10
a = 4
b = 12
apples = [2,3,-4]
oranges = [3,-2,-4]
def countApplesAndOranges(s, t, a, b, apples, oranges):
    # Write your code here
    distancesFromAppleTree = []
    distancesFromOrangeTree = []
    applecount = []
    orangecount = []

    for i in apples:
        distancesFromAppleTree.append(i+a)
    for j in oranges:
        distancesFromOrangeTree.append(j+b)
    for apple in distancesFromAppleTree:
        if apple>=s and apple<=t:
            applecount.append(apple)
    for orange in distancesFromOrangeTree:
        if orange>=s and orange<=t:
            orangecount.append(orange)
    print(len(applecount))
    print(len(orangecount))


countApplesAndOranges(s,t,a,b,apples,oranges)