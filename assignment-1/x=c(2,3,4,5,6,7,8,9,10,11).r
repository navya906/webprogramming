x=c(2,3,4,5,6,7,8,9,10,11)
y=c(40,45,50,52,60,65,70,75,78,85)
plot(x,y,main="Scatter Plot",xlab="X-axis",ylab="Y-axis",col="blue")
r=cor.test(x,y,method="pearson")
r

