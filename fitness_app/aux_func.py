from django.http import HttpResponse

def response(text, code):
    """
        Devuelve una respuesta HTTP customizada
        con el texto y el código dados
    """
    response = HttpResponse(text)
    response.status_code = code
    return response