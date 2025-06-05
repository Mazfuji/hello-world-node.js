#!/bin/bash
SERVICE=hello-world.service
sudo cp $SERVICE /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable $SERVICE
sudo systemctl start $SERVICE
