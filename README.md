# System Analysis Test Task
test task keys&amp;sql&amp;databases&amp;selenium(optional)

## SOLUTION: 
https://docs.google.com/document/d/1ljsjocn5xD9UWKvIqacJVT_BVj6vT5iYGszuxev4oF8/edit?usp=sharing

## THE CODE(SQL)

SELECT Pass_in_trip.id, Company.id, Trip.plane
FROM Trip, Pass_in_trip, Company
WHERE Trip.town_from = 'Rostov' 
ORDER BY Company.id ASC;



