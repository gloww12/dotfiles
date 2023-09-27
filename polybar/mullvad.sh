#!/bin/bash
if nmcli con show mullvad_gb_all | grep -q 'activated'; then
  echo "󱎚 "
else
  echo "DISCONNECTED "
fi
