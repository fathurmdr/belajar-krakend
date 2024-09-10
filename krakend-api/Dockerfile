FROM devopsfaith/krakend:2.7

ENV KRAKEND_PORT=8080

COPY ./manifests /etc/krakend

ENV FC_ENABLE=1

ENV FC_SETTINGS="/etc/krakend/configs"

ENV FC_PARTIALS="/etc/krakend/partials"

ENV FC_TEMPLATES="/etc/krakend/templates"

ENTRYPOINT [ "/usr/bin/krakend" ]

CMD [ "run", "-c", "krakend.json" ]

EXPOSE $KRAKEND_PORT