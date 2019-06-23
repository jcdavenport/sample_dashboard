from django.shortcuts import render

# Create your views here.
import pandas as pd


def index(request):
    """ view function for data app """

    # read datasets  TRY CONNECTING TO POSTGRESQL
    df = pd.read_csv("data/datasets/Road_Weather_Data.csv")

    # drop temp values equal to 9999
    df1 = df[df.SURFACE_TEMP != 9999]
    rs = df1.groupby("COUNTY_NAME")["SURFACE_TEMP"].agg("mean")
    categories = list(rs.index)
    values = list(rs.values)

    table_content = df.to_html(index=None)
    table_content = table_content.replace("", "")
    table_content = table_content.replace('class="dataframe"', "class='table table-striped'")
    table_content = table_content.replace('border="1"', "")

    context = {"categories": categories, 'values': values, 'table_data': table_content}
    return render(request, 'index.html', context=context)
