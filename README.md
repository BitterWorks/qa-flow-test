# Configurar nuevo proyecto

## Levantar proyecto
```
docker-compose up -d
```

## Configurar Reportes Allure
1. Crear un proyecto nuevo en [post_projects](http://localhost:5050/#/Project/post_projects).
2. Ahora en el enpoint [get_projects](http://localhost:5050/#/Project/get_projects) obtener el uri del proyecto que acabamos de crear.
3. Dentro de ese uri, tendremos la lista de reportes para nuestro proyecto. El que se llama `http://localhost:5050/allure-docker-service/projects/<mi-proyecto>/reports/latest/index.html` es el que va a tener los últimos reportes generados.