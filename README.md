# sample_dashboard example
(Make sure Python3.7, Django, Pandas, and Apache2 are installed to run correctly)

1- clone repo

2- copy contents of webmap folder into /var/www/html:  

  - i.e. ```sudo cp -r webmap/* /var/www/html/```
  
3- run apache2 http server: `sudo systemctl start apache2`

4- run application server: `cd sample_dashboard && python3 manage.py runserver`

5- open browser and navigate to: http://127.0.0.1:8000/

---

Interactive web map of San Antonio is an export from QGIS.  The points on  
the map indicate the location of various emergency services including Police   
and Fire Departments.  Click on the points to view data on each location.

<br/><br/>
Sample dataset is from the Road Weather Information System in Iowa: 
http://data.iowadot.gov/datasets/f9b2384162644ca5960259d1012cdded_0.csv


The dashboard graph displays average surface temperature readings 
from several sensors in different Iowa counties.
<br/><br/>

Since the real-time dataset is updated every 5 minutes, the views.py file can be 
updated to download and read the csv file at regular intervals. 
<br/><br/>

**NOTE**: This is only and example of how similar sets of data 
could be organized and displayed.
