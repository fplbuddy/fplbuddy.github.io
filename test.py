import Functions as funcs

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep  3 14:23:51 2021

@author: philipwinchester
"""

import Functions as funcs
import os
import datetime
import constants as const
import numpy as np
os.chdir("/Users/philipwinchester/Sites/fplbuddy.github.io")

for url, file in zip(const.urls, const.files):
    funcs.GetData(url, file)

Match_Data = funcs.LoadData(const.files)
Match_Data= Match_Data.replace(['Luton', 'Burnley', 'Sheffield United'],['Ipswich', 'Leicester', 'Southampton'])
Teams = sorted(list(set(Match_Data['HomeTeam'])))
Res = funcs.Optimise2(Match_Data, Teams)

array = funcs.ProbMatrix("Arsenal", "Wolves",Res,  Res['Gamma'][0],  Res['Rho'][0], Teams)

D = np.trace(array)
AW = np.sum(np.triu(array, k = 1))
HW = np.sum(np.tril(array, k = -1))

print(D)
print(upper_triangular_sum)
print(lower_triangular_sum)