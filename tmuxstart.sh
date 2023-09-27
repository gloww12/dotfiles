#!/bin/sh
tmux new-session
tmux split-window -h 'ranger'
tmux -2 attach-session -d
