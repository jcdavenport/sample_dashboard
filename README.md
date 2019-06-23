# sample_dashboard example

1- clone repo

2- run server: `cd sample_dashboard && python3 manage.py runserver`

3- open browser and navigate to: http://127.0.0.1:8000/

---

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
