// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
//     If cm, the number must be at least 150 and at most 193.
//     If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

const parseList = (list: string) => {
  return list
    .trim()
    .split(/\n\n/)
    .map(entry => entry.split(/\s+/).map(x => x.split(':')))
    .map(Object.fromEntries)
}

type Passport = {
  byr?: string
  iyr?: string
  eyr?: string
  hgt?: string
  hcl?: string
  ecl?: string
  pid?: string
  cid?: string
}

type Maybe<T> = T | null | undefined

const isWithinRange = (value: string | number, start: number, end: number) =>
  Number(value) >= start && Number(value) <= end

const isValidBirthYear = (byr: Maybe<string | number>) => !!byr && isWithinRange(byr, 1920, 2002)

const isValidIssueYear = (iyr: Maybe<string | number>) => !!iyr && isWithinRange(iyr, 2010, 2020)

const isValidExpirationYear = (eyr: Maybe<string | number>) => !!eyr && isWithinRange(eyr, 2020, 2030)

const isValidHeight = (hgt: Maybe<string>) => {
  const [_, value, unit] = hgt?.match(/([0-9]+)(cm|in)$/) || []

  if (unit === 'cm') {
    return isWithinRange(value, 150, 193)
  }

  if (unit === 'in') {
    return isWithinRange(value, 59, 76)
  }

  return false
}

const isValidHairColor = (hcl: Maybe<string>) => !!hcl && RegExp('#[0-9a-f]{6}', 'i').test(hcl)

const isValidEyeColor = (ecl: Maybe<string>) => !!ecl && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)

const isValidPassportId = (pid: Maybe<string> | number) => !!pid && RegExp('[0-9]{9}', 'i').test(pid.toString())

const isValidPassport = (passport: Passport) =>
  isValidBirthYear(passport.byr) &&
  isValidIssueYear(passport.iyr) &&
  isValidExpirationYear(passport.eyr) &&
  isValidHeight(passport.hgt) &&
  isValidHairColor(passport.hcl) &&
  isValidEyeColor(passport.ecl) &&
  isValidPassportId(passport.pid)

export const getValidPassports = (list: string) => {
  const passports = parseList(list)

  return passports.filter(isValidPassport)
}
