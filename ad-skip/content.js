// Function to click the "Skip Ad" button
function clickSkipAdButton() {
    const skipButton = document.querySelector(".ytp-ad-skip-button");
    if (skipButton) {
      skipButton.click();
    }
  }

  const checkInterval = 1000; // 1000ms/1s
  
  const adSkipChecker = setInterval(() => {
    clickSkipAdButton();
 }, checkInterval);
  
 class handleQuery():
 def __init__(self):
     self.database = {}
     # {name: [(start, end)]} for tracking hours
     self.info = {}
     # {name: [(job, compensation, start)]} for tracking info
     self.time = 0
     # tracks what time we are at
                                   
 def add_worker(self, name, position, comp):
     if name in self.database:
         return "false"
     
     self.database[name] = []
     self.info[name] = [(position, comp, 0)]
     return "true"
 
 def register_hours(self, name, time):
     if name not in self.database:
         return "invalid_request"
     
     #if the employee is in the office
     if self.database[name] != []:
         if isinstance(self.database[name][-1], int): 
             start = self.database[name][-1]
             self.database[name][-1] = (start, int(time))
         else:
             #otherwise, add their start time
             self.database[name].append(int(time))
     else:
         self.database[name].append(int(time))
     
     return "registered"
     
 def get_worker(self, name):
     if name not in self.info:
         return ''
         
     timesheet = self.database[name]
     total = 0
     for hours in timesheet:
         if isinstance(hours, tuple):
             total += (int(hours[1]) - int(hours[0]))
     
     return str(total)
 
 def topNworkers(self, n, position):
     workers = [] #gets all the workers of a certain position
     for worker in self.info:
         if self.info[worker][0][0] == position:
             workers.append(worker)
     
     ranking = {} #maps hours with workers who worked that long
     for worker in workers:
         hours = int(self.get_worker(worker))
         if hours not in ranking:
             ranking[hours] = []
         ranking[hours].append(worker)
         
     for hours, workers in ranking.items():
         workers.sort()

     ranking_str = ""
     adds = 0
     n = int(n)
     sortedKeys = sorted(list(ranking.keys()))
     
     for hours in reversed(sortedKeys):
         if adds < n:
             if len(ranking[hours]) > 1: # for tiebreaker
                 for worker in ranking[hours]:
                     if adds < n:
                         ranking_str += f"{worker}({hours}), "
                         adds += 1
             else:
                 worker = ranking[hours][0]
                 ranking_str += f"{worker}({hours}), "
                 adds += 1
     
     return ranking_str[:len(ranking_str)-2]
         
 def promotion(self, name, position, comp, startTime):
     if name not in self.info:
         return 'invalid_request'
     if len(self.info[name]) > 1 and self.time < self.info[name][-1][2]:
         return "invalid_request"

     self.info[name][0] = (position, comp, startTime)
     return "success"
     
 def salaryCalc(self, name, start, end):
     #money earned between start and end times
     if name not in self.info:
         return ''
     
     
     
         
             
def solution(queries):
 Query = handleQuery()
 message = []
 for q in queries:
     if q[0] == "ADD_WORKER":
         message.append(Query.add_worker(q[1], q[2], q[3]))
     elif q[0] == "REGISTER":
         message.append(Query.register_hours(q[1], q[2]))
         Query.time = q[2] #update the time evertime someone clocks in
     elif q[0] == "GET":
         message.append(Query.get_worker(q[1]))
     
     elif q[0] == "TOP_N_WORKERS":
         message.append(Query.topNworkers(q[1], q[2]))
     
     elif q[0] == "PROMOTE":
         message.append(Query.promotion(q[1], q[2], q[3], q[4]))
     
     elif q[0] == "CALC_SALARY":
         message.append(Query.salaryCalc(q[1], q[2], q[3]))
         
         
         
 
 return message