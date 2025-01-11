import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'removeTrailingZeros',
  standalone: false,
})
export class RemoveTrailingZerosPipe implements PipeTransform {
  transform(value: string | null): string | null {
    // Convert the number to a string
    if (!value) return null
    let formattedValue = value.toString()

    // If the number has decimal places, remove trailing zeros
    if (formattedValue.includes('.')) {
      formattedValue = formattedValue.replace(/\.?0+$/, '') // Remove trailing zeros and the decimal point if necessary
    }
    return formattedValue
  }
}
