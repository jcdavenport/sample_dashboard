from django.shortcuts import render

# Create your views here.
import pandas as pd


def index(request):
    """ view function for sales app """

    # read data  TRY CONNECTING TO POSTGRESQL

    df = pd.read_csv("/home/jxdx/datathon/sample_dashboard/sales/data/car_sales.csv")
    rs = df.groupby("Engine size")["Sales in thousands"].agg("sum")
    categories = list(rs.index)
    values = list(rs.values)

    table_content = df.to_html(index=None)
    table_content = table_content.replace("", "")
    table_content = table_content.replace('class="dataframe"', "class='table table-striped'")
    table_content = table_content.replace('border="1"', "")

    context = {"categories": categories, 'values': values, 'table_data': table_content}
    return render(request, 'index.html', context=context)
